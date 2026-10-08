# 米田引理 $\implies$ 单态射逐点检验
`imp.presheaf-mono` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 → `lem.presheaf-mono-pointwise` 预层态射的单满按点检验

只需做（$\Longrightarrow$）方向。设 $\varphi : T \implies T'$ 是单态射，固定 $X$，设 $a, b \in T(X)$ 且 $\varphi_{X}(a) = \varphi_{X}(b)$。

由米田引理的对偶形式，$a, b$ 各自对应一个自然变换 $f, g : h_{X} \implies T$，即在每个 $Y$ 处

$$f_{Y}, g_{Y} : \operatorname{Hom}_{\mathcal{C}}(Y, X) \to T(Y), \qquad \psi \mapsto T(\psi)(a) \ \text{或}\ T(\psi)(b)$$

对任意 $\psi : Y \to X$，用 $\varphi$ 的自然性：

$$(\varphi \circ f)_{Y}(\psi) = \varphi_{Y}\bigl(T(\psi)(a)\bigr) = T'(\psi)\bigl(\varphi_{X}(a)\bigr) = T'(\psi)\bigl(\varphi_{X}(b)\bigr) = (\varphi \circ g)_{Y}(\psi)$$

> 续见 proofs/imp.presheaf-mono.2.md
