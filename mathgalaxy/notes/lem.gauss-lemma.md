# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

**证明**。把 $w$ 与 $T_{p}S$ 中的向量等同。取测地变分 

$$f(t,s) = \exp_{p}\bigl(t(v + sw)\bigr),\qquad t \in [0,1],\ |s| \text{ 充分小}.$$

 对每个固定的 $s$，$t \mapsto f(t,s)$ 是以 $v + sw$ 为初速度的测地线，故 $\nabla_{\partial_{t}}\partial_{t} = 0$。记 $E(t) = \langle \partial_{t}, \partial_{s}\rangle$。

**第一步：$E$ 的导数**。由 Levi-Civita 联络的度量相容性与无挠性（$\nabla_{\partial_{t}}\partial_{s} = \nabla_{\partial_{s}}\partial_{t}$）：

$$\frac{d}{dt}E = \langle \nabla_{\partial_{t}}\partial_{t}, \partial_{s}\rangle + \langle \partial_{t}, \nabla_{\partial_{t}}\partial_{s}\rangle = \langle \partial_{t}, \nabla_{\partial_{s}}\partial_{t}\rangle = \frac{1}{2}\partial_{s}\lVert \partial_{t}\rVert^{2}.$$

> 续见 notes/lem.gauss-lemma.2.md
