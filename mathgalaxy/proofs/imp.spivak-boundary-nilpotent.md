# 两次取面 + 交替符号 $\implies$ 边界平方为零
`imp.spivak-boundary-nilpotent` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 → `prop.boundary-squared-zero` 边界算子平方为零

记 $\varepsilon_{i,\alpha}$ 为「把第 $i$ 个坐标钉在 $\alpha$ 上并删掉」这个操作，于是 $\partial = \sum_{i,\alpha}(-1)^{i+\alpha}\varepsilon_{i,\alpha}$，其中 $(-1)^{i+\alpha}$ 的 $i$ 是**当前这个元组里**的位置下标。对 $k$-方块 $c$ 展开：

$$\partial(\partial c) = \sum_{i,\alpha}\sum_{j,\beta}(-1)^{i+\alpha}(-1)^{j+\beta}\,\varepsilon_{j,\beta}\varepsilon_{i,\alpha}\,c .$$

**（1）两次取面给出同一个 $(k-2)$-方块。** 内层下标 $j$ 跑遍删掉第 $i$ 个坐标后剩下的 $k-1$ 个位置，所以它对应的**原坐标** $\ell\ne i$ 必与 $i$ 不同 —— 不出现「对同一坐标取两次」的项。$\varepsilon_{j,\beta}\varepsilon_{i,\alpha}c$ 的结果就是把坐标 $i$ 钉在 $\alpha$、坐标 $\ell$ 钉在 $\beta$，与次序无关。

> 续见 proofs/imp.spivak-boundary-nilpotent.2.md
