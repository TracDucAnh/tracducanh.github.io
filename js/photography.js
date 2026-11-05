/* =========================================================
   Photography page: albums, masonry layout, picture viewer.

   Photos live in photography/<folder>/. A static site cannot
   list a folder, so every file is named below as
   [file name, width, height, average colour]. When you add a
   photo, add a line. Size and colour are only hints for the first
   paint (the real size is read once the photo loads; the colour
   fills the tile while it loads and may be left out).

   Files named "[MARK_n]..." are pinned to the top of their
   album in the order of n. The rest are shuffled on every visit.
   ========================================================= */

var ALBUMS = [
	{folder: "Budapest", place: "Budapest", country: "Hungary", coords: "47.4979° N · 19.0402° E", photos: [
		["1916CF61-7474-4014-9134-BF7001BFD7BC-21370-000002C825448918.JPG", 2048, 1152, "#4B4541"],
		["392EC1C9-3701-4BCC-9BFC-6AC1D65143C4-21370-000002C828A7AEF0.JPG", 2048, 1152, "#6C453E"],
		["48B09E32-6373-45D1-B327-00AF1931DB55-5164-000000808BEF9563.JPG", 2048, 1152, "#483F3C"],
		["4958FD1F-4C7A-4F23-8B99-DFFD763B44BC-22708-000002A516EF8A16.JPG", 2048, 1152, "#3A4057"],
		["52E78D2A-C92E-4E95-875A-0C1C11525347-22464-0000029FA3A41AEE.JPG", 2048, 1152, "#6E7078"],
		["53BCB5F9-8A6C-44E3-A8C0-CB60F8BD0825-21370-000002C830B78BC3.JPG", 2048, 1152, "#564E4D"],
		["5F5443AF-5D5E-46B2-BB0A-336BF56945F2-21370-000002C821501A95.JPG", 2048, 1152, "#55595A"],
		["61F958E4-9C4C-41AF-A404-9B2403688E3F-21856-000002903FB20D5C.JPG", 2048, 1152, "#3A3D3E"],
		["6A4DC21A-F62B-44A2-866F-4B308DB59662-22708-000002A515347058.JPG", 2048, 1152, "#42454C"],
		["6BEBB3E1-2EF9-4CAA-AD6B-42FDA3905C46-22708-000002A50E7DB546.jpg", 1834, 1032, "#474955"],
		["7BEF9BB1-7EFB-46DE-98C9-BA80425CC91F-22464-0000029F974C232E.JPG", 2048, 1152, "#554F4D"],
		["8103BBF5-A884-48AE-9C3E-257E21194A9C-22464-0000029F99C74D85.JPG", 2048, 1152, "#494844"],
		["820AC8AC-1252-49CD-9BC1-70C98E8A2FA6-21318-000002C71B4022FE.JPG", 2048, 1152, "#827E7F"],
		["92948280-2649-485E-9733-66EE313136F5-22708-000002A52F3D3D93.JPG", 2048, 1152, "#435162"],
		["A9899763-6AEC-4FA8-A4F9-F98A4D7D2B96-5164-000000808A369CF8.JPG", 2048, 1152, "#413B3A"],
		["B043B8FC-A1B9-47E2-99AD-65D9BBEECD52-5164-0000008082AC806E.JPG", 2048, 1152, "#42342B"],
		["B19AB334-01C2-46C5-B752-53EAA3DA987B-21318-000002C726D645C5.JPG", 2048, 1152, "#626469"],
		["B362872F-0194-4A07-8E76-EE3826574DAA-22464-0000029FA616FE98.JPG", 2048, 1152, "#5B5457"],
		["C915879B-74B7-4F0D-ABC7-28D9FDC83D32-21370-000002C838F030FA.JPG", 2048, 1152, "#3F3937"],
		["C9C01CAD-67B5-41D4-B28A-619DD5663B45-21370-000002C827132987.JPG", 2048, 1152, "#524E4D"],
		["CD0EF30E-BCB1-4FB8-BFF4-196734785326-6991-000000AD1BACBF8E.JPG", 2048, 1152, "#3D4047"],
		["DA3DAD17-E531-4E2C-8707-AA4FA8E80EFD-12361-0000018F07157197.JPG", 1988, 1118, "#4D4A4A"],
		["E98B3234-4EE6-4857-A599-323F5869E284-4291-0000006E9D0E8AC1.JPG", 2048, 1152, "#434243"],
		["[MARK_1]_5A544B6B-BE4E-4C28-9EA7-1440C5F83878-12361-0000018EF202D555.jpg", 1783, 1003, "#53575C"],
		["[MARK_2]_6DCA9B20-1702-45CD-A275-09ED2B9B7DE3-22708-000002A51CB968A3.JPG", 2048, 1152, "#425D84"],
		["[MARK_3]_8B9D53EB-DA4A-452F-BD82-8CCA82D84EFA-22708-000002A52093EA24.JPG", 2048, 1152, "#475871"],
		["[MARK_4]_ECF58157-0A01-4B83-A4A1-3B316CF062E7-21370-000002C834CFBFE6.JPG", 2048, 1152, "#4F443C"],
		["[MARK_5]_EA23FACD-DBD1-42A9-87F1-E10173E29C69-12361-0000018EFEA791A7.jpg", 1581, 890, "#727271"],
		["[MARK_6]_B796E586-C689-4DD8-821C-40001E1A2219-4291-0000006E99265E3F.JPG", 1748, 983, "#3C3B3B"],
		["[MARK_7]93EC2FA3-9909-4FF8-ADDA-9CCA28F30411-12361-0000018EE8248B77.JPG", 2048, 1152, "#48494A"],
		["[MARK_8]_24839ED1-81CE-48A8-9DF4-155D12CD6B77-22464-0000029F95D753C7.JPG", 2048, 1152, "#4A403B"],
	]},
	{folder: "Vienna", place: "Vienna", country: "Austria", coords: "48.2082° N · 16.3738° E", photos: [
		["22B20628-38AB-4C46-AD89-32457DC8EFE4-31611-00000420B81AA225 3.JPG", 2048, 1152, "#444C43"],
		["22C17D88-DB7D-4F02-B063-24B8E2B5E04C-31611-00000420B56037BC 3.JPG", 2048, 1152, "#5A5958"],
		["40286067-32D6-4399-97F0-01C26BBC18DF-31611-00000420C7829A56 3.JPG", 2048, 1152, "#4E4C4B"],
		["526E04F9-8904-46C0-873F-51274D2FA5E3-44009-000005BD439E637B 3.jpg", 1653, 930, "#5D5448"],
		["57AB6318-1033-484D-A1E6-E88FBFE12ED5-44009-000005BD4D67AE1C 3.JPG", 2048, 1152, "#3A342E"],
		["65BDA029-1D23-4EDE-840C-5BDB5B24645E-31611-00000420CC9E658B 3.JPG", 2048, 1152, "#3C3C3D"],
		["6C79795A-78B2-45B0-A482-50D546F0C83E-31611-00000420DD1960A0 3.JPG", 2048, 1152, "#4D463F"],
		["6EFE5022-C1A7-4A51-8FF7-C08DBBC524E7-44009-000005C283CF60CF 3.JPG", 2048, 1152, "#332929"],
		["70A9B269-EC99-4806-8E73-94BFC4C0E7F0-31611-00000420BEF0A946 3.JPG", 2048, 1152, "#47494A"],
		["7443616B-B369-4C12-8F5B-93AD02B72E58-31611-00000420BC8D26F4 3.JPG", 2048, 1152, "#545350"],
		["7B40AE03-9E78-40C8-A2FF-2E4197674FB2-44009-000005BD42467839 3.JPG", 2048, 1152, "#4B372C"],
		["883B3C0D-50FE-4D62-B651-16F57A902DE9-31611-00000420CA77FC51 3.JPG", 2048, 1152, "#4B443B"],
		["88D92F93-E42A-43E9-A431-024628AC1AC1-44009-000005BD3AB3D2C9 3.JPG", 2048, 1152, "#453832"],
		["AB59F8D6-8619-41A9-96DB-A26D9CBE0D39-44009-000005C28205F29F 3.JPG", 2048, 1152, "#5D534E"],
		["B80482BF-D2A0-436D-B5A5-B0870F67D2C7-31611-00000420D7760090 3.JPG", 2048, 1152, "#29211E"],
		["DEF2AA6C-9908-4172-892B-12DF7D6E08F1-44009-000005BD4999553D 3.JPG", 2048, 1152, "#211E1A"],
		["EBDBAFB4-F039-4031-AB4E-E5318F91F44C-44009-000005C2852B4EE8 3.JPG", 2048, 1152, "#3F3B39"],
		["F002A07B-886E-4373-8775-BFEFA9131C93-31611-00000420BA72E5D0 3.JPG", 2048, 1152, "#464741"],
		["F9594D78-27D7-41EF-A44F-C9F401F4C45C-44009-000005C27EBC795D 3.JPG", 2048, 1152, "#4B4A4B"],
		["[MARK_1]_85EE555A-67E0-4E4F-A742-E8E9CCEDBCB6-31611-00000420C0EDC28E 3.JPG", 2048, 1152, "#555758"],
		["[MARK_2]_389B996C-0741-4B63-9DFB-D29E5162EF3F-31611-00000420D15A740C 3.JPG", 2048, 1152, "#626467"],
		["[MARK_3]_0C2E98B7-E603-4728-94CD-072EDC8929D4-31611-00000420E86EAF17 3.JPG", 1240, 697, "#1E1E1D"],
		["[MARK_4]_0F63566B-4E25-4064-8C42-0CAE39B99DA7-31611-00000420D5E718AC 3.JPG", 2048, 1152, "#47423E"],
	]},
	{folder: "Ninh_Binh", place: "Ninh Bình", country: "Việt Nam", coords: "20.2506° N · 105.9745° E", photos: [
		["DSCF1728.JPG", 3456, 2304, "#3C3A35"],
		["DSCF1737.JPG", 3456, 2304, "#343323"],
		["DSC_1641.JPG", 5051, 3372, "#313B33"],
		["DSC_1690.JPG", 4360, 2911, "#171D11"],
		["DSC_1749.JPG", 5738, 3830, "#363D38"],
		["DSC_1807.jpg", 2843, 1898, "#313629"],
		["DSC_1884 2.JPG", 3950, 2637, "#161A1B"],
		["DSC_1884.JPG", 6016, 4016, "#43494C"],
		["DSC_1912.JPG", 4083, 2726, "#15191A"],
		["DSC_1932.jpg", 3858, 2576, "#1A1F1B"],
		["DSC_1958.JPG", 6016, 4016, "#343A3B"],
		["DSC_2187.JPG", 5681, 3792, "#323C3D"],
		["DSC_2193.JPG", 3811, 5709, "#2D3538"],
		["DSC_2420.JPG", 6016, 4016, "#353A38"],
		["DSC_2636.JPG", 5963, 3981, "#313328"],
		["DSC_2693.JPG", 3012, 4512, "#87572B"],
		["DSC_2865.jpg", 6016, 4016, "#565D5C"],
		["DSC_2875.JPG", 5775, 3855, "#2E312E"],
		["[MARK_1]_DSC_2049.JPG", 3447, 5163, "#2F332F"],
		["[MARK_2]_DSC_1637.JPG", 5121, 3419, "#2A2620"],
		["[MARK_3]_DSC_1725.JPG", 4490, 2997, "#151B1D"],
		["[MARK_4]D_SC_2206 2.JPG", 6016, 4016, "#1C2121"],
		["[MARK_5]_DSC_2671.jpg", 3948, 5914, "#343028"],
		["[MARK_6]_DSC_3084.JPG", 6005, 4009, "#384445"],
	]},
	{folder: "Singapore", place: "Singapore", country: "Singapore", coords: "1.3521° N · 103.8198° E", photos: [
		["DSCF8725.JPG", 4896, 3264, "#3C3C35"],
		["DSCF8804.JPG", 4896, 3264, "#625249"],
		["DSCF8808.JPG", 4896, 3264, "#443C30"],
		["DSCF8812.JPG", 4896, 3264, "#282621"],
		["DSCF8814.JPG", 4896, 3264, "#61503A"],
		["DSCF8827.JPG", 4896, 3264, "#1F1C19"],
		["[MARK_1]_DSCF8828.JPG", 4896, 3264, "#1E1E1E"],
		["[MARK_2]_DSCF9910.jpg", 1440, 959, "#242A29"],
		["[MARK_3]_DSCF8802.JPG", 4896, 3264, "#63534A"],
		["[MARK_4]_DSCF8809.JPG", 4896, 3264, "#1C1814"],
		["z6551800258421_c3f61207d6ea9b3bd43e58dac941e76d.jpg", 2568, 1926, "#444441"],
		["z6551800259891_f37fd2340cb61de706812903389a1f02.jpg", 1920, 2560, "#44423E"],
		["z6551800261189_57160b127c80b9d4907f9a2bb5b36a3e.jpg", 2568, 1926, "#42423E"],
	]}
];

(function(){
	"use strict";

	var GAP = 8;                 // px between photos (matches --gap in css)
	var SPAN_CHANCE = 0.28;      // how often a landscape photo may stretch over two columns
	var MAX_STRETCH = 0.18;      // max extra height per photo when evening out column bottoms (cropped via object-fit)
	var MAX_TRIM = 0.15;         // max height a photo may lose for the same purpose

	function columnsFor(width){
		if (width < 520) return 1;
		if (width < 900) return 2;
		if (width < 1300) return 3;
		return 4;
	}

	function shuffle(arr){
		for (var i = arr.length - 1; i > 0; i--){
			var j = Math.floor(Math.random() * (i + 1));
			var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
		}
		return arr;
	}

	// Small seeded RNG so a resize re-flows the same way instead of re-rolling spans
	function rng(seed){
		return function(){
			seed |= 0; seed = seed + 0x6D2B79F5 | 0;
			var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
			t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
			return ((t ^ t >>> 14) >>> 0) / 4294967296;
		};
	}

	function pad(n){ return (n < 10 ? "0" : "") + n; }

	/* ---------- Build data ---------- */
	var albums = ALBUMS.filter(function(a){ return a.photos.length; }).map(function(a){
		var photos = a.photos.map(function(p){
			var m = /^\[MARK_(\d+)\]/i.exec(p[0]);
			return {
				src: "photography/" + a.folder + "/" + encodeURIComponent(p[0]),
				w: p[1] || 3, h: p[2] || 2,
				color: p[3] || "#1a1a1d",
				mark: m ? parseInt(m[1], 10) : null
			};
		});
		var marked = photos.filter(function(p){ return p.mark !== null; })
			.sort(function(x, y){ return x.mark - y.mark; });
		var rest = shuffle(photos.filter(function(p){ return p.mark === null; }));
		return {
			id: "album-" + a.folder.toLowerCase(),
			place: a.place, country: a.country, coords: a.coords,
			photos: marked.concat(rest),
			seed: Math.floor(Math.random() * 1e9),
			grid: null, tiles: [], order: [], width: 0
		};
	});

	/* ---------- Image loader ----------
	   Photos start loading well before they scroll into view, a few at a
	   time, nearest to the screen first. Each one is decoded off the main
	   thread before it is shown, so big JPEGs never stall scrolling. */
	var loader = (function(){
		var MAX_PARALLEL = 4;
		var AHEAD = "1400px 0px";   // how far outside the screen to start loading
		var queue = [], active = 0;

		function distance(job){
			var r = job.fig.getBoundingClientRect();
			if (r.bottom < 0) return -r.bottom;
			if (r.top > window.innerHeight) return r.top - window.innerHeight;
			return 0;
		}

		function finish(job, ok){
			active--;
			job.fig.classList.remove("is-pending");
			if (ok){
				job.img.classList.add("is-loaded");
				// Trust the real (EXIF-rotated) size over the hint in the list
				var w = job.img.naturalWidth, h = job.img.naturalHeight;
				if (w && h && Math.abs(h / w - job.photo.h / job.photo.w) > 0.02){
					job.photo.w = w; job.photo.h = h;
					scheduleLayout(job.album);
				}
			} else {
				job.fig.classList.add("is-error");
			}
			pump();
		}

		function pump(){
			if (active >= MAX_PARALLEL || !queue.length) return;
			queue.sort(function(a, b){ return distance(a) - distance(b); });
			while (active < MAX_PARALLEL && queue.length){
				var job = queue.shift();
				active++;
				start(job);
			}
		}

		function start(job){
			var img = job.img;
			img.onload = function(){
				var ready = img.decode ? img.decode() : Promise.resolve();
				ready.then(function(){ finish(job, true); }, function(){ finish(job, true); });
			};
			img.onerror = function(){ finish(job, false); };
			img.src = job.photo.src;
		}

		function request(job){
			if (job.requested) return;
			job.requested = true;
			queue.push(job);
			pump();
		}

		var io = "IntersectionObserver" in window ? new IntersectionObserver(function(entries){
			entries.forEach(function(e){
				if (e.isIntersecting){ io.unobserve(e.target); request(e.target._job); }
			});
		}, {rootMargin: AHEAD}) : null;

		return {
			watch: function(fig){ io ? io.observe(fig) : request(fig._job); }
		};
	})();

	/* ---------- Render sections ---------- */
	var nav = document.getElementById("ph-places");
	var root = document.getElementById("ph-albums");

	albums.forEach(function(album, ai){
		var link = document.createElement("a");
		link.href = "#" + album.id;
		link.innerHTML = album.place + "<sup>" + album.photos.length + "</sup>";
		nav.appendChild(link);

		var sec = document.createElement("section");
		sec.className = "ph-album";
		sec.id = album.id;
		sec.innerHTML =
			'<div class="ph-album-head">' +
				'<div><span class="ph-album-no">' + pad(ai + 1) + '</span>' +
				'<h2 class="ph-album-place">' + album.place + '</h2>' +
				'<span class="ph-album-country">' + album.country + '</span></div>' +
				'<div class="ph-album-meta">' + album.coords + '<br>' + album.photos.length + ' frames</div>' +
			'</div>' +
			'<div class="ph-grid"></div>';
		root.appendChild(sec);
		album.grid = sec.querySelector(".ph-grid");

		album.photos.forEach(function(photo, pi){
			var fig = document.createElement("figure");
			fig.className = "ph-tile is-pending";
			fig.style.backgroundColor = photo.color;   // average colour of the photo, shown while it loads
			fig.tabIndex = 0;
			fig.setAttribute("role", "button");
			fig.setAttribute("aria-label", album.place + " — photo " + (pi + 1));
			var img = new Image();
			img.alt = album.place + ", " + album.country;
			img.decoding = "async";
			fig.appendChild(img);
			fig._job = {album: album, photo: photo, fig: fig, img: img};
			loader.watch(fig);
			fig.addEventListener("click", function(){ openViewer(album, photo); });
			fig.addEventListener("keydown", function(e){
				if (e.key === "Enter" || e.key === " "){ e.preventDefault(); openViewer(album, photo); }
			});
			album.grid.appendChild(fig);
			album.tiles.push(fig);
		});
	});

	/* ---------- Masonry ----------
	   1. Pinned photos first (in MARK order), then the shuffled rest.
	   2. Each photo goes into the currently shortest column.
	   3. Now and then a landscape photo spans two neighbouring columns
	      whose bottoms are almost level, which breaks the rhythm nicely
	      (MARK_1 always does, as a cover image, when it is landscape).
	   4. Finally the columns are evened out: the photos under each
	      column's last wide photo grow a little (cropped via object-fit)
	      so all columns end on one clean line. */
	function layout(album){
		var W = album.grid.clientWidth;
		if (!W) return;
		album.width = W;
		var cols = columnsFor(W);
		var colW = (W - GAP * (cols - 1)) / cols;
		var rand = rng(album.seed);
		var heights = [];
		var floor = [];          // per column: bottom of the last spanning photo
		for (var c = 0; c < cols; c++){ heights.push(0); floor.push(0); }
		var placed = [];
		var sinceSpan = cols;

		album.photos.forEach(function(photo, i){
			var ratio = photo.h / photo.w;
			var col = 0;
			for (var k = 1; k < cols; k++) if (heights[k] < heights[col] - 0.5) col = k;

			var span = 1;
			if (cols >= 3 && photo.w > photo.h * 1.15){
				var want = photo.mark === 1 ||
					(photo.mark === null && sinceSpan >= cols && album.photos.length - i > cols * 2 && rand() < SPAN_CHANCE);
				if (want){
					var best = -1, bestDiff = Infinity;
					[col - 1, col].forEach(function(a){
						if (a < 0 || a + 1 >= cols) return;
						var d = Math.abs(heights[a] - heights[a + 1]);
						if (d < bestDiff){ bestDiff = d; best = a; }
					});
					if (best >= 0 && bestDiff < colW * 0.22){ span = 2; col = best; }
				}
			}

			var width = span === 2 ? colW * 2 + GAP : colW;
			var top = span === 2 ? Math.max(heights[col], heights[col + 1]) : heights[col];
			var item = {i: i, col: col, span: span, left: col * (colW + GAP), top: top, width: width, height: width * ratio};
			placed.push(item);
			for (var s = 0; s < span; s++){
				heights[col + s] = top + item.height + GAP;
				if (span === 2) floor[col + s] = heights[col + s];
			}
			sinceSpan = span === 2 ? 0 : sinceSpan + 1;
		});

		// Even out column bottoms: pick one common bottom line that every
		// column can reach by stretching or trimming its free photos a little
		var free = [], lo = -Infinity, hi = Infinity;
		for (var c2 = 0; c2 < cols; c2++){
			var items = placed.filter(function(p){ return p.span === 1 && p.col === c2 && p.top >= floor[c2] - 0.5; });
			var total = items.reduce(function(sum, p){ return sum + p.height; }, 0);
			free.push({items: items, total: total});
			lo = Math.max(lo, heights[c2] - total * MAX_TRIM);
			hi = Math.min(hi, heights[c2] + total * MAX_STRETCH);
		}
		var tallest = Math.max.apply(null, heights);
		var target = lo <= hi ? Math.min(tallest, hi) : (lo + hi) / 2;
		for (var c3 = 0; c3 < cols; c3++){
			var f = free[c3];
			if (!f.total) continue;
			var delta = Math.max(-f.total * MAX_TRIM, Math.min(f.total * MAX_STRETCH, target - heights[c3]));
			var shift = 0;
			f.items.forEach(function(p){
				var add = delta * p.height / f.total;
				p.top += shift;
				p.height += add;
				shift += add;
			});
			heights[c3] += delta;
		}
		target = Math.max.apply(null, heights);

		placed.forEach(function(p){
			var st = album.tiles[p.i].style;
			st.left = p.left + "px";
			st.top = p.top + "px";
			st.width = p.width + "px";
			st.height = p.height + "px";
		});
		album.grid.style.height = Math.max(0, target - GAP) + "px";

		// Viewer walks through photos in reading order (top to bottom, left to right)
		album.order = placed.slice().sort(function(a, b){
			return (a.top - b.top) || (a.left - b.left);
		}).map(function(p){ return album.photos[p.i]; });
	}

	var pending = [];
	var raf = 0;
	function scheduleLayout(album){
		if (pending.indexOf(album) < 0) pending.push(album);
		if (raf) return;
		raf = requestAnimationFrame(function(){
			raf = 0;
			var list = pending; pending = [];
			list.forEach(layout);
		});
	}

	albums.forEach(layout);
	var resizeTimer;
	window.addEventListener("resize", function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function(){
			albums.forEach(function(a){ if (a.grid.clientWidth !== a.width) layout(a); });
		}, 120);
	});

	/* ---------- Picture viewer ---------- */
	var viewer = document.getElementById("ph-viewer");
	var stage = document.getElementById("ph-viewer-stage");
	var vImg = document.getElementById("ph-viewer-img");
	var caption = document.getElementById("ph-viewer-caption");
	var current = null;          // {album, index}

	function tileOf(album, photo){
		return album.tiles[album.photos.indexOf(photo)];
	}

	// Fit the photo inside the stage, never upscaling past its real size (stays sharp)
	function fitSize(photo){
		var cs = getComputedStyle(stage);
		var aw = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
		var ah = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
		var scale = Math.min(aw / photo.w, ah / photo.h, 1);
		return {w: Math.round(photo.w * scale), h: Math.round(photo.h * scale)};
	}

	function show(photo){
		var size = fitSize(photo);
		vImg.style.width = size.w + "px";
		vImg.style.height = size.h + "px";
		viewer.classList.add("is-loading");
		vImg.onload = vImg.onerror = function(){ viewer.classList.remove("is-loading"); };
		vImg.src = photo.src;
		if (vImg.complete) viewer.classList.remove("is-loading");
		vImg.alt = current.album.place + ", " + current.album.country;
		caption.innerHTML = current.album.place + ", " + current.album.country +
			"<b>" + pad(current.index + 1) + " / " + pad(current.album.order.length) + "</b>";
		// Warm up the neighbours
		[-1, 1].forEach(function(d){
			var n = current.album.order[(current.index + d + current.album.order.length) % current.album.order.length];
			(new Image()).src = n.src;
		});
	}

	// Animate between the tile on the page and the centred photo
	function flipFrom(rect){
		var to = vImg.getBoundingClientRect();
		if (!rect || !to.width) return;
		vImg.classList.remove("is-animating");
		vImg.style.transform = "translate(" + (rect.left - to.left) + "px," + (rect.top - to.top) + "px) " +
			"scale(" + (rect.width / to.width) + "," + (rect.height / to.height) + ")";
		vImg.getBoundingClientRect();   // commit the start state
		vImg.classList.add("is-animating");
		vImg.style.transform = "";
	}

	function openViewer(album, photo){
		current = {album: album, index: Math.max(0, album.order.indexOf(photo))};
		viewer.hidden = false;
		document.body.classList.add("ph-locked");
		show(photo);
		flipFrom(tileOf(album, photo).getBoundingClientRect());
		requestAnimationFrame(function(){ viewer.classList.add("is-open"); });
		document.getElementById("ph-viewer-close").focus({preventScroll: true});
	}

	function closeViewer(){
		if (!current) return;
		var photo = current.album.order[current.index];
		var tile = tileOf(current.album, photo);
		var r = tile.getBoundingClientRect();
		var to = vImg.getBoundingClientRect();
		if (r.bottom > 0 && r.top < window.innerHeight && to.width){
			vImg.classList.add("is-animating");
			vImg.style.transform = "translate(" + (r.left - to.left) + "px," + (r.top - to.top) + "px) " +
				"scale(" + (r.width / to.width) + "," + (r.height / to.height) + ")";
		}
		viewer.classList.remove("is-open");
		current = null;
		setTimeout(function(){
			if (current) return;   // reopened meanwhile
			viewer.hidden = true;
			vImg.classList.remove("is-animating");
			vImg.style.transform = "";
			vImg.removeAttribute("src");
			document.body.classList.remove("ph-locked");
			tile.focus({preventScroll: true});
		}, 380);
	}

	function step(d){
		if (!current) return;
		var n = current.album.order.length;
		current.index = (current.index + d + n) % n;
		vImg.classList.add("is-animating");
		vImg.style.opacity = "0";
		vImg.style.transform = "translateX(" + (-d * 24) + "px)";
		setTimeout(function(){
			if (!current) return;
			vImg.classList.remove("is-animating");
			vImg.style.transform = "translateX(" + (d * 24) + "px)";
			show(current.album.order[current.index]);
			vImg.getBoundingClientRect();
			vImg.classList.add("is-animating");
			vImg.style.opacity = "";
			vImg.style.transform = "";
		}, 180);
	}

	stage.addEventListener("click", function(e){ if (e.target === stage) closeViewer(); });
	document.getElementById("ph-viewer-close").addEventListener("click", closeViewer);
	document.getElementById("ph-viewer-prev").addEventListener("click", function(){ step(-1); });
	document.getElementById("ph-viewer-next").addEventListener("click", function(){ step(1); });

	document.addEventListener("keydown", function(e){
		if (!current) return;
		if (e.key === "Escape") closeViewer();
		else if (e.key === "ArrowLeft") step(-1);
		else if (e.key === "ArrowRight") step(1);
	});

	var touchX = null, touchY = null;
	viewer.addEventListener("touchstart", function(e){
		touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
	}, {passive: true});
	viewer.addEventListener("touchend", function(e){
		if (touchX === null) return;
		var dx = e.changedTouches[0].clientX - touchX;
		var dy = e.changedTouches[0].clientY - touchY;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
		else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeViewer();
		touchX = null;
	});

	window.addEventListener("resize", function(){
		if (!current) return;
		var size = fitSize(current.album.order[current.index]);
		vImg.style.width = size.w + "px";
		vImg.style.height = size.h + "px";
	});

	/* ---------- Intro loader ----------
	   Shown once per browser session: waits for the font and the avatar
	   (at least a short beat, at most a couple of seconds), then lifts. */
	var intro = document.getElementById("ph-intro-loader");
	if (intro){
		var seen = false;
		try { seen = sessionStorage.getItem("ph-intro") === "1"; sessionStorage.setItem("ph-intro", "1"); } catch (e){}
		if (seen){
			intro.parentNode.removeChild(intro);
		} else {
			var avatar = new Promise(function(resolve){
				var a = new Image();
				a.onload = a.onerror = resolve;
				a.src = "images/about.jpg";
			});
			var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
			var minWait = new Promise(function(r){ setTimeout(r, 900); });
			var maxWait = new Promise(function(r){ setTimeout(r, 2600); });
			Promise.race([Promise.all([avatar, fonts, minWait]), maxWait]).then(function(){
				intro.classList.add("is-done");
				document.body.classList.remove("is-intro");
				setTimeout(function(){ if (intro.parentNode) intro.parentNode.removeChild(intro); }, 900);
			});
		}
	}
	if (!intro || !intro.parentNode) document.body.classList.remove("is-intro");

	/* ---------- Offline photo cache ----------
	   GitHub Pages only lets browsers keep files for ~10 minutes, so a
	   service worker (sw.js) keeps every photo a visitor has seen in the
	   browser's cache: the next visit scrolls straight from disk. */
	if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
		window.addEventListener("load", function(){
			navigator.serviceWorker.register("sw.js").catch(function(){});
		});
	}
})();
