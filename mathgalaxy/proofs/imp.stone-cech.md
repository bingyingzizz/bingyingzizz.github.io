# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

**构造。** 把 $X$ 送进 Tychonoff 方块：

$$e_{X} : X \to [0,1]^{C(X,[0,1])}, \qquad x \mapsto (f(x))_{f \in C(X,[0,1])}$$

每个分量 $x \mapsto f(x)$ 连续，所以 $e_{X}$ 连续（到积空间的映射连续 $\iff$ 每个分量连续）。由 Tychonoff 定理方块紧，取闭包

$$\beta X := \overline{e_{X}(X)} \subseteq [0,1]^{C(X,[0,1])}$$

闭子集紧、方块 Hausdorff 而子空间 Hausdorff，所以 $\beta X \in \mathbf{CHaus}$。

> 续见 proofs/imp.stone-cech.2.md
