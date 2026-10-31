# 图卡相容 $\implies$ 切向量与卡无关，并给出坐标基
`imp.tu-tangent-space` · 推出 · strong 边 · 根 `../`

`def.smooth-manifold` 光滑流形 + `def.partial-derivative` 偏导数 → `def.tangent-space-manifold` 切空间

**(a) 良定义。** 设 $\gamma_{1},\gamma_{2}$ 在卡 $(U,\varphi)$ 里速度相同。对另一张卡 $(V,\psi)$，链式法则给出

$$(\psi\circ\gamma_{i})'(0) = \mathrm{d}(\psi\circ\varphi^{-1})_{\varphi(p)}\bigl((\varphi\circ\gamma_{i})'(0)\bigr),$$

同一个线性映射作用在同一个向量上，故两者仍相同。于是「相切」与卡无关，$T_{p}M$ 有定义。

**(b) 坐标基。** 取 $\gamma_{i}(t) := \varphi^{-1}\bigl(\varphi(p)+t\,e_{i}\bigr)$，则 $(\varphi\circ\gamma_{i})'(0) = e_{i}$，故 $\partial_{i}(p)$ 是 $n$ 个互不相同的切向量。在卡里「相切」等价于「$\mathbb{R}^{n}$ 中速度相同」，而 $e_{1},\ldots,e_{n}$ 线性无关，故 $\{\partial_{i}(p)\}$ 线性无关，$\dim T_{p}M = n$。

> 续见 proofs/imp.tu-tangent-space.2.md
