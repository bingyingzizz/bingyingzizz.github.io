# 化归到递增函数 $\implies BV$ 的正则性
`imp.bv-regularity` · 推出 · strong 边 · 根 `../`

`thm.bv-jordan` BV 的 Jordan 分解 + `thm.monotone-differentiable` 单调函数几乎处处可导 → `prop.bv-regularity` BV 函数的正则性

由**Jordan 分解**，只需对**有界递增**函数证明这三条 —— 差的性质自动继承。

**(c)** 递增函数 $F$ 在每点都有单侧极限：

$$F(x-) = \sup_{y < x} F(y), \quad  F(x+) = \inf_{y > x} F(y)$$

（递增数列的有界单调收敛定理。）同理 $F(\pm \infty) = \sup/\inf$ 也存在。

**(d)** 由**单调函数那条定理**的 (a)：不连续点至多可数。

**(e)** 由同一条定理的 (b)：$F' = G'$ a.e.，其中 $G(x) = F(x+)$。对 $G - H$ 形式的函数两边相减即可。∎

$>$ ⭐ 整个证明的模式很典型：**先证明「递增」这个好情形，再用 Jordan 分解把一般情形搬过去**。
