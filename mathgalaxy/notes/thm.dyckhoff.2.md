# 局部紧上凝聚态＝层上同调　`thm.dyckhoff`　·　说明
根 `../`

**证明（用 $c_{X}$ 的谱序列，把 $R^{q}c_{X*}$ 算成零）。**
- 由 $c_{X}^{-1}(X) = X$（$X$ 作为 $\mathrm{Open}(X)$ 里的对象，逆像取回它自己），得 Grothendieck 谱序列
$$E^{p,q}_{2} = H^{p}_{\mathrm{sheaf}}\bigl(X,\ R^{q}c_{X*}M\bigr) \;\Longrightarrow\; H^{p+q}_{\mathrm{cond}}(X,\ M).$$
- 又 $c_{X*}M = M$，所以**只需证 $R^{q}c_{X*}M = 0$（$q > 0$）**。
- $R^{q}c_{X*}M$ 是预层 $U \mapsto H^{q}_{\mathrm{cond}}(U, M)$ 层化得到的层。$X$ **局部紧**，它在 $x$ 处的茎是
$$(R^{q}c_{X*}M)_{x} = \varinjlim_{x \in U} H^{q}_{\mathrm{cond}}(U, M) = \varinjlim_{x \in K} H^{q}_{\mathrm{cond}}(K, M)$$
（$U$ 跑 $x$ 的开邻域、$K$ 跑 $x$ 的紧邻域 —— 局部紧让两个滤过系统共尾）。
- 固定 $x$ 的一个紧邻域 $K$ 与 Stone 空间 $K_{0}$ 连同满射 $K_{0} \twoheadrightarrow K$；对 $x$ 的每个紧邻域 $S \subseteq K$，拉回得 $S_{0} \to S$。**Stone 的积与子空间仍是 Stone**，所以 $S_{n}$ 全是 Stone 空间，于是由「紧 Hausdorff 上 Čech = 层上同调」与上一条「Stone 上常

> 续见 notes/thm.dyckhoff.3.md
