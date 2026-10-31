# 隐函数定理 $\implies$ 正则水平集是流形
`imp.tu-level-set` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 + `def.smooth-manifold` 光滑流形 → `thm.regular-level-set` 正则水平集定理

**逐点造卡。** 取 $p\in M = F^{-1}(c)$。$\mathrm{d}F_{p}$ 满射给出秩 $m$，故有 $m$ 个坐标（重排后记 $y = (x^{n-m+1},\ldots,x^{n})$）使 $m\times m$ 矩阵 $\partial F/\partial y(p)$ 可逆。隐函数定理给出 $p$ 的邻域里

$$M = \{(x,g(x)) : x\in W\},\qquad g\in C^{\infty}(W),$$

其中 $W\subseteq\mathbb{R}^{n-m}$ 是含 $x_{0}$ 的开集、$g(x_{0}) = y_{0}$。于是 $\varphi\bigl(x,g(x)\bigr) := x$ 把 $M$ 的这一块同胚地送到 $W$，这就是一张 $n-m$ 维图卡。

**相容性。** 这类卡取可数多张（第二可数空间里每点取一个邻域即可）。两张卡重叠处的转移映射是 $x\mapsto \psi\bigl(x,g_{\alpha}(x)\bigr)$，它是光滑映射 $x\mapsto (x,g_{\alpha}(x))$ 与光滑映射 $\psi$ 的复合，故 $C^{\infty}$。于是这些卡构成图册，$M$ 是 $n-m$ 维光滑流形。

> 续见 proofs/imp.tu-level-set.2.md
