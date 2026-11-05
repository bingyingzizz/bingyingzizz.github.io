# 图卡相容 $\implies$ 切向量与卡无关，并给出坐标基
`imp.tu-tangent-space` · 推出 · strong 边 · 根 `../`

`def.smooth-manifold` 光滑流形 + `def.partial-derivative` 偏导数 → `def.tangent-space-manifold` 切空间

在卡里「相切」等价于「$\mathbb{R}^{n}$ 中速度相同」，而 $e_{1},\ldots,e_{n}$ 线性无关，故 $\{\partial_{i}(p)\}$ 线性无关，$\dim T_{p}M = n$。

**(c) 曲线类与导子一一对应。** 给定 $v = [\gamma]$，令 $D_{v}f := (f\circ\gamma)'(0)$；Leibniz 律来自乘积求导。反之设 $D$ 是 $C^{\infty}(M)$ 上在 $p$ 处的导子。

⚠️ **先要局部性**（不然下面的 Taylor 展开用不了）：若 $f$ 在 $p$ 的某开邻域上 $=0$，取 $h\in C^{\infty}(M)$ 使 $h\equiv1$ 于该邻域、$h\equiv0$ 于 $\operatorname{supp}f$ 之外，则 $hf\equiv0$ $\implies$ $D(hf)=0$；而 Leibniz 律给 $D(hf)=D(h)\,f(p)+h(p)\,D(f)=D(f)$，故 $D(f)=0$。

有了局部性，在卡里把 $f$ 写成

$$f = f(p)+\sum_{i}\bigl(x^{i}-x^{i}(p)\bigr)h_{i},\qquad h_{i}(p) = \partial_{i}f(p),$$

> 续见 proofs/imp.tu-tangent-space.4.md
