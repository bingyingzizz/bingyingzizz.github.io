# 图卡相容 $\implies$ 切向量与卡无关，并给出坐标基
`imp.tu-tangent-space` · 推出 · strong 边 · 根 `../`

`def.smooth-manifold` 光滑流形 + `def.partial-derivative` 偏导数 → `def.tangent-space-manifold` 切空间

⚠️ 到这里只有**集合**，向量空间结构要另外定义：取任一卡 $(U,\varphi)$，令 $[\gamma_{1}]+[\gamma_{2}]$ 为曲线 $t\mapsto\varphi^{-1}\bigl(\varphi(p)+t\,(\dot{(\varphi\circ\gamma_{1})}(0)+\dot{(\varphi\circ\gamma_{2})}(0))\bigr)$ 的类，$c\,[\gamma]$ 同理；**良定义**由上面同一个论证给（换卡是同一个线性映射作用），公理逐条搬到 $\mathbb{R}^{n}$ 里验。后面所有「$T_{p}M$ 上的线性运算」都从这里来。

**(b) 坐标基。** 取 $\gamma_{i}(t) := \varphi^{-1}\bigl(\varphi(p)+t\,e_{i}\bigr)$，则 $(\varphi\circ\gamma_{i})'(0) = e_{i}$，故 $\partial_{i}(p)$ 是 $n$ 个互不相同的切向量。

> 续见 proofs/imp.tu-tangent-space.3.md
