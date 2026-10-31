# 6-函子形式　`def.six-functors`　·　说明
根 `../`

⭐ 前四个函子 $\otimes, \operatorname{Hom}, f^*, f_*$ 通常容易造；**全部难度在 $f_!$**。经典例子是 $\ell$-进层 $D_{\mathrm{et}}(X, \mathbb{Z}_\ell)$ 与凝聚态/固态层。

⭐ 一旦有了 $f_!$，$f^!$ 由伴随给出。反过来，$f_!$ 也由「开浸入 + 固有映射 + Nagata 紧化」决定：$f = \bar f \circ j$ 时 $f_! = \bar f_* j_!$。所以真正要造的只有**开浸入的 $j_!$**（见 `prop.open-immersion-shriek`）。

⚠ 在凝聚态世界里，$f_!$ 不能只用抽象 $A$-模造 —— 开浸入的 $j_!$ 要求 $\prod_I A \otimes_A A[1/f] \cong \prod_I A[1/f]$，这在抽象模里失效、在**固态模**里成立。
