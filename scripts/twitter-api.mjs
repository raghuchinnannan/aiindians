/**
 * Simplifying access to the Twitter API
 * using third party APIs
 * and cleaning up the output
 */

import dotenv from 'dotenv'
dotenv.config()

const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY

/**
 * Example Response:
{
  "data": {
    "user": {
      "result": {
        "__typename": "User",
        "id": "VXNlcjo0NDE5NjM5Nw==",
        "rest_id": "44196397",
        "affiliates_highlighted_label": {
          "label": {
            "url": {
              "url": "https://twitter.com/Twitter",
              "urlType": "DeepLink"
            },
            "badge": {
              "url": "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg"
            },
            "description": "Twitter",
            "userLabelType": "BusinessLabel",
            "userLabelDisplayType": "Badge"
          }
        },
        "is_blue_verified": true,
        "legacy": {
          "protected": false,
          "created_at": "Tue Jun 02 20:12:29 +0000 2009",
          "default_profile": false,
          "default_profile_image": false,
          "description": "",
          "entities": {
            "description": {
              "urls": []
            }
          },
          "fast_followers_count": 0,
          "favourites_count": 20592,
          "followers_count": 134026729,
          "friends_count": 191,
          "has_custom_timelines": true,
          "is_translator": false,
          "listed_count": 119739,
          "location": "",
          "media_count": 1483,
          "name": "Elon Musk",
          "normal_followers_count": 134026729,
          "pinned_tweet_ids_str": [],
          "possibly_sensitive": false,
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1576183471",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
          "profile_interstitial_type": "",
          "screen_name": "elonmusk",
          "statuses_count": 24274,
          "translator_type": "none",
          "verified": true,
          "withheld_in_countries": []
        },
        "has_nft_avatar": false,
        "super_follow_eligible": false,
        "super_followed_by": false,
        "super_following": false,
        "business_account": {},
        "legacy_extended_profile": {},
        "is_profile_translatable": false,
        "verification_info": {
          "reason": {
            "description": {
              "text": "This account is verified because it's an affiliate of @Twitter on Twitter. Learn more",
              "entities": [
                {
                  "from_index": 54,
                  "to_index": 62,
                  "ref": {
                    "url": "https://twitter.com/Twitter",
                    "url_type": "ExternalUrl"
                  }
                },
                {
                  "from_index": 75,
                  "to_index": 85,
                  "ref": {
                    "url": "https://help.twitter.com/en/rules-and-policies/profile-labels",
                    "url_type": "ExternalUrl"
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
}
 */
export const getUserInfo = async (username) => {
  const url = `https://${RAPIDAPI_HOST}/user/details?username=${username}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST
    }
  };

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result.data.user.result.legacy
  } catch (error) {
    console.error(error);
  }
}

