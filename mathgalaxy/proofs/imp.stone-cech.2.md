# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

**函子性。** 连续映射 $\varphi : X \to Y$ 诱导 $C(Y,[0,1]) \to C(X,[0,1])$（$g \mapsto g \circ \varphi$），进而诱导方块的映射 $[0,1]^{C(X,[0,1])} \to [0,1]^{C(Y,[0,1])}$；它把 $e_{X}(X)$ 送到 $e_{Y}(Y)$，于是把闭包送到闭包，得到 $\beta\varphi : \beta X \to \beta Y$。

**泛性质。** 设 $K \in \mathbf{CHaus}$，$f : X \to K$ 连续。紧 Hausdorff 空间是 $T_{3.5}$ 的（不同的点可被连续函数分离），所以 $e_{K} : K \to [0,1]^{C(K,[0,1])}$ 是单射；把 $K$ 看成那个方块里的子空间，目标就变成「造一个 $\widehat{f}$ 使右下三角交换」：

> 续见 proofs/imp.stone-cech.3.md
