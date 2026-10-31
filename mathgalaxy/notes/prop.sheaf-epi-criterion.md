# 满态射的局部判据　`prop.sheaf-epi-criterion`　·　说明
根 `../`

**证明。**
- **$(\implies)$** 设 $u : F \to G$ 是满态射。任取 $X$ 与 $s \in G(X)$，即 $s : h_{X} \to G$。取拉回
$$\begin{array}{ccc} h_{X}\times_{G}F & \xrightarrow{\ \ } & F\\ \big\downarrow & & \big\downarrow{\scriptstyle u}\\ h_{X} & \xrightarrow{\ s\ } & G\end{array}$$
底边 $u$ 满 $\implies$ 左边那条也是满态射（拓扑斯里满态射沿任意态射拉回仍满），即 $h_{X}\times_{G}F \to h_{X}$ 是**覆盖**；取它的一族可表示层覆盖 $(X_{i}\to X)$，则每支给出 $s|_{X_{i}}$ 在 $F(X_{i})$ 里的一个原像 ✓。
- **$(\Longleftarrow)$** 设条件成立，取像分解 $u = m\,e$（$e$ 满、$m : I \rightarrowtail G$ 单）。条件说：对每个 $X$、每个 $s \in G(X)$，存在覆盖使 $s|_{X_{i}}$ 落在 $\operatorname{im}u \subseteq \operatorname{im}m = I$ 里。而单态射是同构 $\iff$ 它的像在每个 $X$ 上被覆盖局部地盖住（子对象相等的局部判据）。故 $m$ 是同构，$u = m e$ 满 ✓。∎
一句话：**层的满态射就是「局部满」。**

> 续见 notes/prop.sheaf-epi-criterion.2.md
