const router = require("express").Router();
const friendsController = require("../../controllers/friends.controller");

router.route("/request").post(friendsController.requestFriend);
router.route("/request/accept").post(friendsController.acceptFriendRequest);
router.route("/request/reject").post(friendsController.rejectFriendRequest);

module.exports = router;