# 等价函子的判据　`thm.equivalence-criterion`　·　说明
根 `../`

**证明。**
**$(\Longleftarrow)$** 设 $F$ 全忠实、本质满。对每个 $X' \in \mathcal{C}'$ 选一个 $G(X') \in \mathcal{C}$ 与一个同构
$$\varphi_{X'} : F\bigl(G(X')\bigr) \longrightarrow X'$$
（本质满给出存在性，选择公理给出这一族的选择）✓。
对 $f' : X' \to Y'$，令 $G(f') : G(X') \to G(Y')$ 是**唯一**使
$$F\bigl(G(f')\bigr) = \varphi_{Y'}^{-1} \circ f' \circ \varphi_{X'}$$
的态射 —— $F$ 全忠实，这样的态射存在且唯一 ✓。这样定义的 $G$ 保恒等与复合（两边都过了 $F$，再全忠实即得）✓，所以 $G$ 是函子。
由构造，$\varphi : F \circ G \implies 1_{\mathcal{C}'}$ 是自然同构 ✓。另一侧：每个 $X$ 处 $\varphi_{F(X)}^{-1} : F(X) \to F\bigl(GF(X)\bigr)$ 在全忠实之下来自唯一的 $\psi_{X} : X \to GF(X)$，而 $\psi$ 自然（自然性同样过 $F$ 检验，由 $\varphi$ 的自然性得到）✓，于是 $\psi : 1_{\mathcal{C}} \implies G \circ F$ 也是自然同构 ✓。
**$(\Longrightarrow)$** 设 $F$ 有伪逆 $G$，即 $F G \cong 1_{\mathcal{C}'}$、$G F \cong 1_{\ma

> 续见 notes/thm.equivalence-criterion.2.md
