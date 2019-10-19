import axios from 'axios';

export const API = axios.create({
    baseURL: `https://botaye.herokuapp.com/api/`,
})

export const ListingService = {

    getAll() {
        return API.get("Listings");
    },
    get(id) {
        return API.get(`Listings/${id}`);
    },
    create(Listing) {
        return API.post("Listings", {
            ItemCode: Listing.ItemCode,
            price: Listing.price,
            floor: Listing.floor,
            bedroom: Listing.bedroom,
            area: Listing.area,
            location: Listing.location,
            function: Listing.function,
            contact: Listing.contact,
            remarks: Listing.remarks,
            urls: Listing.urls
        });
    },
    update(Listing) {
        return API.update("Listings", {
            Listing: Listing
        });
    },
    destroy(id) {
        return API.delete(`Listings/${id}`);
    }
};

export const UploadService = {
    upload(formData) {
        return API.post("containers/images/upload", formData);
    }

}