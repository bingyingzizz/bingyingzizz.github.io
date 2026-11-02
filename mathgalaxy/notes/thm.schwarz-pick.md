# Schwarz–Pick 定理　`thm.schwarz-pick`　·　说明
根 `../`

⭐ 这两个式子都是「把基准点搬到 0」的产物：$\varphi_a(z) = (z - a)/(1 - \overline{a} z)$ 是圆盘的自同构，把 $a$ 送到 $0$；用 $\varphi_{f(z_0)} \circ f \circ \varphi_{z_0}^{-1}$ 造一个固定原点的映射，套 Schwarz 引理，再变回来。

⭐ 双曲度量的读法：$\dfrac{|\mathrm{d}w|}{1 - |w|^2}$ 是圆盘上的双曲长度元，上式说全纯自映射**不会放大**它。等号成立时叫等距。

⚠ 这个不等式对所有 $z_0$ 同时成立，等价于「$f$ 是双曲度量的 $1$-Lipschitz 映射」。这是 Schwarz 引理的完整形式 —— Schwarz 引理只是 $z_0 = 0$、$f(z_0) = 0$ 的特例。

📌 推论：$\mathbb{D}$ 的自同构恰是 $z \mapsto e^{i\theta}\dfrac{z - a}{1 - \overline{a} z}$（$|a| < 1$，$\theta \in \mathbb{R}$）。取等号时 $f$ 必是这种形状，反过来这些映射显然取等号。
