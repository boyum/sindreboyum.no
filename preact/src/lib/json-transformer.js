export default class JSONTransformer {
	constructor() {
		this.chunks = [];
		this.depth = 0;
		this.inString = false;
		this.skipNext = false;
	}
	start() {}
	flush() {}
	
	/**
	 * Gets one object from a stream
	 * @param {object} chunk 
	 * @param {object} controller 
	 */
	transform(chunk, controller) {
		for (let i = 0; i < chunk.length; i++) {
			if (this.skipNext) {
				this.skipNext = false;
				continue;
			}
			const byte = chunk[i];
			const char = String.fromCharCode(byte);
			switch(char) {
				case '"': 
					this.inString = !this.inString;
				break;
				case '\\': 
					this.skipNext = true;
				break;	
				case '{': 
					if (this.inString) continue;
					this.depth++; 
				break;
				case '}': 
					if (this.inString) continue;				
					this.depth--;
					if (this.depth === 0) {
						const tail = new Uint8Array(chunk.buffer, chunk.byteOffset, i + 1);
						chunk = new Uint8Array(chunk.buffer, chunk.byteOffset + i + 1);
						this.chunks.push(tail);

						const decoder = new TextDecoder();
						let jsonString = this.chunks.reduce((str, chunk) => str + decoder.decode(chunk), '');

						const firstChar = jsonString.charAt(0);

						if (firstChar === '[' || firstChar === ',') {
							jsonString = jsonString.substring(1);
						}

						controller.enqueue(jsonString);

						this.chunks.length = 0;
						i = -1;
					}
					
				break;
			}
		}
	}
}