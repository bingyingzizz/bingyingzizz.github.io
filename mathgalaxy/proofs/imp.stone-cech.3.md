# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

$$\begin{array}{ccc} X & \xrightarrow{\ e_{X}\ } & \beta X \subseteq [0,1]^{C(X,[0,1])} \\ & \searrow\scriptstyle{f} & \downarrow\scriptstyle{\widehat{f}} \\ & & K \subseteq [0,1]^{C(K,[0,1])} \end{array}$$

用分量定义 $\widehat{f}$：对每个 $g \in C(K,[0,1])$，令第 $g$ 个分量为

$$(\pi_{g} \circ \widehat{f}) := \pi_{g \circ f} : [0,1]^{C(X,[0,1])} \longrightarrow [0,1]$$

即「把第 $g$ 个坐标读成 $g \circ f$ 那个坐标」。每个分量连续，所以 $\widehat{f}$ 连续；在 $e_{X}(x)$ 上验证：

> 续见 proofs/imp.stone-cech.4.md
