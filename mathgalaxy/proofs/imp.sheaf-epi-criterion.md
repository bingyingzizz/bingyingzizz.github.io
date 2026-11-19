# imp.sheaf-epi-criterion
`imp.sheaf-epi-criterion` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.topos` 拓扑斯 + `def.subobject` 子对象 → `prop.sheaf-epi-criterion` 满态射的局部判据

**证明。**
- **$(\implies)$** 设 $u : F \to G$ 是满态射。任取 $X$ 与 $s \in G(X)$，即 $s : h_{X} \to G$。取拉回
$$\begin{array}{ccc} h_{X}\times_{G}F & \xrightarrow{\ \ } & F\\ \big\downarrow & & \big\downarrow{\scriptstyle u}\\ h_{X} & \xrightarrow{\ s\ } & G\end{array}$$
底边 $u$ 满 $\implies$ 左边那条也是满态射（拓扑斯里满态射沿任意态射拉回仍满），即 $h_{X}\times_{G}F \to h_{X}$ 是**覆盖**；取它的一族可表示层覆盖 $(X_{i}\to X)$，则每支给出 $s|_{X_{i}}$ 在 $F(X_{i})$ 里的一个原像 ✓。
- **$(\Longleftarrow)$** 设条件成立，取像分解 $u = m\,e$（$e$ 满、$m : I \rightarrowtail G$ 单）。

> 续见 proofs/imp.sheaf-epi-criterion.2.md
