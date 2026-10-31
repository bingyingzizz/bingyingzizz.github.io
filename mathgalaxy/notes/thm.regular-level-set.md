# 正则水平集定理　`thm.regular-level-set`　·　说明
根 `../`

**例子**：$F(x) = \lVert x\rVert^{2}$，它在 $F^{-1}(1) = S^{n-1}$ 上梯度为 $2x\ne 0$，故球面是流形。$F = \det$，$\mathrm{d}\det_{A}(B) = \operatorname{tr}(A^{-1}B)$（$\det A = 1$ 时），在 $\mathrm{SL}(n,\mathbb{R})$ 上非零，故 $\mathrm{SL}(n,\mathbb{R})$ 是 $n^{2}-1$ 维流形。

**满射条件不能丢**：$F(x,y) = xy$、$c = 0$，$\mathrm{d}F$ 在原点为零，而 $F^{-1}(0)$ 是两条相交直线 —— 交点附近不是流形。

**证明骨架**：每点用隐函数定理把 $m$ 个变量解成另 $n-m$ 个变量的光滑函数，于是 $M$ 局部是图 $\{(x,g(x))\}$，图就是一张卡；重叠处的转移映射是光滑映射的限制，故相容。切空间由「$F\circ\gamma\equiv c$ 求导」得 $\mathrm{d}F_{p}(\gamma'(0)) = 0$，再比维数。

⚠️ **正则性是相对 $F$ 说的**：$c$ 不是正则值时原像可能是奇点集（$xy = 0$ 就是）。同一个 $M$ 可以用不同的 $F$ 表示，只要找得到一个 $F$ 使 $c$ 是正则值就够了。

> 续见 notes/thm.regular-level-set.2.md
