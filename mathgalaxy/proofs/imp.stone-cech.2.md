# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

它把 $e_{X}(X)$ 送到 $e_{Y}(Y)$，于是把闭包送到闭包，得到 $\beta\varphi : \beta X \to \beta Y$。

**泛性质。** 设 $K \in \mathbf{CHaus}$，$f : X \to K$ 连续。

紧 Hausdorff 空间是 $T_{3.5}$ 的（不同的点可被连续函数分离），所以 $e_{K} : K \to [0,1]^{C(K,[0,1])}$ 是单射；

把 $K$ 看成那个方块里的子空间，目标就变成「造一个 $\widehat{f}$ 使右下三角交换」：

$$\begin{array}{ccc} X & \xrightarrow{\ e_{X}\ } & \beta X \subseteq [0,1]^{C(X,[0,1])} \\ & \searrow\scriptstyle{f} & \downarrow\scriptstyle{\widehat{f}} \\ & & K \subseteq [0,1]^{C(K,[0,1])} \end{array}$$

用分量定义 $\widehat{f}$：对每个 $g \in C(K,[0,1])$，令第 $g$ 个分量为

> 续见 proofs/imp.stone-cech.3.md
