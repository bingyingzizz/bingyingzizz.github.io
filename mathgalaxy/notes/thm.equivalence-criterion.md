# 等价函子的判据　`thm.equivalence-criterion`　·　说明
根 `../`

**证明。**
**$(\Longleftarrow)$** 设 $F$ 全忠实、本质满。对每个 $X' \in \mathcal{C}'$ 选一个 $G(X') \in \mathcal{C}$ 与一个同构
$$\varphi_{X'} : F\bigl(G(X')\bigr) \longrightarrow X'$$
（本质满给出存在性，选择公理给出这一族的选择）✓。
对 $f' : X' \to Y'$，令 $G(f') : G(X') \to G(Y')$ 是**唯一**使
$$F\bigl(G(f')\bigr) = \varphi_{Y'}^{-1} \circ f' \circ \varphi_{X'}$$
的态射 —— $F$ 全忠实，这样的态射存在且唯一 ✓。这样定义的 $G$ 保恒等与复合（两边都过了 $F$，再全忠实即得）✓，所以 $G$ 是函子。
由构造，$\varphi : F \circ G \implies 1_{\mathcal{C}'}$ 是自然同构 ✓。

> 续见 notes/thm.equivalence-criterion.2.md
