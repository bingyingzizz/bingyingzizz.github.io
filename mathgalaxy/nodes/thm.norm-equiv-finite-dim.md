# 有限维范数等价　`thm.norm-equiv-finite-dim`
有限维空间上所有范数等价
layer 17 · 定理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=thm.norm-equiv-finite-dim)　·　[节点索引](../index.md)

设 $\dim E < \infty$。则 $E$ 上任意两个范数等价；等价地，任取一组基 $e_1, \ldots, e_n$，则存在 $\alpha, \beta > 0$ 使

$$\alpha\,\|x\|_\infty \le \|x\| \le \beta\,\|x\|_\infty , \qquad \|x\|_\infty := \max_{1 \le k \le n} |x_k| .$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.norm-equiv-finite-dim.2.md](./thm.norm-equiv-finite-dim.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.norm-equiv-finite-dim.3.md](./thm.norm-equiv-finite-dim.3.md)

refs: Rudin, Functional Analysis · 赋范空间与有限维

## 说明
**为什么有限维特殊**：单位球面紧，范数在球面上取到正的最小值，于是任一范数被 $\lVert\cdot\rVert_\infty$ 双向控制。完整证明见边 `imp.norm-equiv-finite-dim-proof`。

引用：`thm.norm-equiv-finite-dim`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
