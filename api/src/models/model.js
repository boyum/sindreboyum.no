import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HomepageSchema = new Schema({
    heading: String,
    description: String,
    socialMedia: [{
        title: String,
        url: String,
        icon: String
    }]
});

export default mongoose.model('Homepage', HomepageSchema);