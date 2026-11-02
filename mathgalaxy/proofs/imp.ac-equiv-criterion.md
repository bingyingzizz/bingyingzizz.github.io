# 选择公理：本质满给出的一族同构要一次挑出来
`imp.ac-equiv-criterion` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `thm.equivalence-criterion` 等价函子的判据

等价判据的证明里，由 $F$ 本质满，对每个 $X' \in \mathcal{D}$ 都存在 $G(X') \in \mathcal{C}$ 与同构 $F(G(X')) \cong X'$。

**要构造函子 $G$**，必须对每个 $X'$ **同时**挑定一个 $(G(X'), \varphi_{X'})$ —— 而「存在」只逐点给出，没有统一规则。这一步是 AC。

挑定之后，对态射 $f' : X' \to Y'$，$G(f')$ 由「$F(G(f')) = \varphi_{Y'}^{-1} \circ f' \circ \varphi_{X'}$」唯一确定（$F$ 全忠实）；泛函性随之成立。

所以这条判据的「充分性」方向用到 AC，这也是「范畴等价」在无选择公理的环境里会变形的经典位置。
