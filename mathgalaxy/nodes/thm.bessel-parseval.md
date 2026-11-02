# Bessel 与 Parseval　`thm.bessel-parseval`
Bessel 不等式与 Parseval 等式
layer 12 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.bessel-parseval)　·　[节点索引](../index.md)

设 $\{e_i\}_{i \in I}$ 标准正交。则对每个 $x \in H$，

**Bessel**：$\displaystyle \|x\|^2 \ge \sum_{i \in I} |\langle x, e_i\rangle|^2$；

且下列等价：

1. $\{e_i\}$ 是正交基；
2. 对每个 $x$ 取等号（**Parseval**）：$\|x\|^2 = \sum_i |\langle x, e_i\rangle|^2$；
3. 对每个 $x$：$x = \sum_{i \in I} \langle x, e_i\rangle\, e_i$（按范数收敛）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.bessel-parseval.2.md](./thm.bessel-parseval.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.bessel-parseval.3.md](./thm.bessel-parseval.3.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/thm.bessel-parseval.md`

引用：`thm.bessel-parseval`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
