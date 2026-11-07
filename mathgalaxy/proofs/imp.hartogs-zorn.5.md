# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` Zorn 引理

$>$ 这一路线的分工很干净：**AC 负责「挑」，Hartogs 负责「停」**。对比之下，经由良序定理的证法（见「良序定理 $\iff$ 佐恩引理」那条黑线）是把「停」交给 Burali–Forti 悖论。

> AC、良序、Zorn 三者等价，已经有三条 equivalence 边；这一条是**第二条路线**（借 Hartogs 定理），按推论边处理：真推得通，但不是建造顺序（分层由等价类负责）。

比走良序定理更直：整段只挑一次元素，终止性由 Hartogs 定理（ZF 可证）兜底。
