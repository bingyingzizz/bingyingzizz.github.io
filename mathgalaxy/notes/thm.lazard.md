# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

**记号与路线。** $R$-Mod 记右 $R$-模范畴；$(F_i,f_{ij})$ 是有向集 $I$ 上的正向系，$F_i$ 有限生成自由。

**$(\Longleftarrow)$ 完整。** 有限生成自由模平坦；有向滤过余极限与 $\otimes_R$ 交换（张量积保余极限），正合列取滤过余极限仍正合。于是对任意左 $R$-模 $N$，$F\otimes_R N=\varinjlim_i (F_i\otimes_R N)$，每个 $F_i\otimes_R -$ 正合，故 $F\otimes_R -$ 正合。∎

**$(\implies)$ 的真正缺口：引理 L（平坦性的等式判据）。** 设 $F$ 平坦、$P$ 有限呈现、$\varphi:P\to F$ 是 $R$-线性映射。则存在有限生成自由模 $R^k$ 与分解

$$P \xrightarrow{\ \psi\ } R^k \xrightarrow{\ \chi\ } F,\qquad \varphi=\chi\circ\psi .$$

等价形式：$\operatorname{Hom}(P,F)$ 中任意有限组「在 $F$ 中相容」的数据都能在某个有限自由模中实现（Bourbaki, Commutative Algebra, Ch. I 的平坦性等式判据；Lazard 1969）。**本图没有这条引理的节点**，这是本节点保留 skeleton 的唯一原因。

> 续见 notes/thm.lazard.2.md
