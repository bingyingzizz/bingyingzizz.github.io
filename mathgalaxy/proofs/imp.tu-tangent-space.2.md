# 图卡相容 $\implies$ 切向量与卡无关，并给出坐标基
`imp.tu-tangent-space` · 推出 · strong 边 · 根 `../`

`def.smooth-manifold` 光滑流形 + `def.partial-derivative` 偏导数 → `def.tangent-space-manifold` 切空间

**(c) 曲线类与导子一一对应。** 给定 $v = [\gamma]$，令 $D_{v}f := (f\circ\gamma)'(0)$；Leibniz 律来自乘积求导。反之设 $D$ 是导子，在卡里把 $f$ 写成

$$f = f(p)+\sum_{i}\bigl(x^{i}-x^{i}(p)\bigr)h_{i},\qquad h_{i}(p) = \partial_{i}f(p),$$

由 Leibniz 律 $D\bigl((x^{i}-x^{i}(p))h_{i}\bigr) = D(x^{i})\,h_{i}(p)+0\cdot D(h_{i})$，故 $Df = \sum_{i}D(x^{i})\,\partial_{i}f(p)$ —— 即 $D$ 就是坐标速度为 $\bigl(D(x^{1}),\ldots,D(x^{n})\bigr)$ 的那条曲线的方向导数。∎
