# 长正合列　`thm.long-exact`
短正合列给出长正合列（蛇引理）
layer 16 · 定理 · 同调与正合列 · 同调代数

设 $\mathcal{A}$ 是阿贝尔范畴，$0 \to K \to L \to M \to 0$ 是复形的短正合列。则存在**长正合列**

$$\cdots \to H^{n}(K) \to H^{n}(L) \to H^{n}(M) \xrightarrow{\ \delta\ } H^{n+1}(K) \to \cdots$$

其中 $\delta$ 叫**连接同态**。

推论：$H^{n} : \mathbf{K}(\mathcal{A}) \to \mathcal{A}$ 是**上同调函子**。

## 为什么成立（入边，证明在 proofs/）
- `def.distinguished-triangle` 导出三角 + `def.cohomology` 同调 + `prop.triangle-rotation` 三角的旋转与延拓：短正合列 $\implies$ 长正合列　proofs/imp.long-exact.md
- `def.cohomology` 同调：用到了定义 同调　proofs/def-dep.cohomology-long-exact.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-long-exact.md

## 它能推出什么 / 谁在用它
- 被 `thm.derived-long-exact` 导出函子的长正合列 用
