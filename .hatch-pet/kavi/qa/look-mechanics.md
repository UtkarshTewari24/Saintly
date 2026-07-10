# Kavi look mechanics

Kavi looks around by leading with the large amber eyes, then turning the muzzle and head, with a restrained shoulder follow-through. The lower torso and paws stay planted on one baseline. The teal scarf remains attached at the neck; its point follows the chest and lags only slightly. Ears follow the head angle without flopping independently, and the centered cream forehead spark stays centered on the skull.

Motion budget: each 22.5-degree step advances the eyes, muzzle, head yaw/pitch, ear angle, and upper torso by a small even amount. Body scale, paw placement, and baseline stay stable. No whole-sprite tilt, affine rotation, stretching, or replacement eyes.

- 000 up: chin lifts, pupils and full eye surfaces aim upward, more underside of muzzle is visible, ears remain upright, chest stays front-readable.
- 090 screen-right: muzzle and nose cross to screen-right of head center, pupils follow right, Kavi's screen-left cheek becomes more visible, screen-right cheek partly occludes, scarf turns subtly with chest.
- 180 down: chin tucks, pupils and full eye surfaces aim down, upper eyelids lower slightly, more forehead is visible, ears angle forward subtly.
- 270 screen-left: muzzle and nose cross to screen-left of head center, pupils follow left, Kavi's screen-right cheek becomes more visible, screen-left cheek partly occludes, scarf turns subtly with chest.

Diagonal poses interpolate these families evenly. The tail and feet remain anchored and do not switch sides or teleport. The eyes retain their original amber construction, rim, highlights, and eyelids; they rotate as coherent eye surfaces rather than detached sliding pupils.
