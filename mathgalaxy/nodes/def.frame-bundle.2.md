# 帧丛　`def.frame-bundle`　·　续页（第 2 页）
[在星图里打开](../#n=def.frame-bundle)　·　第 1 页 [nodes/def.frame-bundle.md](./def.frame-bundle.md)

## 陈述（续）
者之间那座桥：把每根纤维里的「一组基」而不是「一个向量」取出来当新纤维。
设 $\pi : E \to M$ 是秩 $k$ 的光滑实向量丛。**帧丛** $\mathrm{Fr}(E) \to M$ 的纤维是

$$\mathrm{Fr}(E)_{p} := \{\, (e_{1}, \ldots, e_{k}) : e_{i} \in E_{p},\ (e_{i})\ \text{是}\ E_{p}\ \text{的一组基} \,\} ,$$
全体帧丛取不交并 $\mathrm{Fr}(E) := \bigsqcup_{p} \mathrm{Fr}(E)_{p}$，投影取「忘记基、只留 $p$」。

**结构**：$\mathrm{GL}(k,\mathbb{R})$ 在右侧自由作用（换一组基就是右乘一个矩阵），
$$(e_{1}, \ldots, e_{k})\cdot A := \Bigl(\sum_{i} e_{i}A_{i1}, \ldots, \sum_{i} e_{i}A_{ik}\Bigr) ,$$

于是 $\mathrm{Fr}(E) \to M$ 是**主 $\mathrm{GL}(k,\mathbb{R})$-丛**（`def.principal-bundle`）。

> 续见 [nodes/def.frame-bundle.3.md](./def.frame-bundle.3.md)
