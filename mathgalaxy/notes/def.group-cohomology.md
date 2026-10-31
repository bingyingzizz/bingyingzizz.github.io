# 群上同调　`def.group-cohomology`　·　说明
根 `../`

⭐ **一句话**：$H^{0}$ 只是「不动点」；$H^{n}$（$n \ge 1$）量的是**不变量函子断了多远**，也就是 $G$ 的作用有多不平凡。

**两条算法**：
- **内射消解**（定义本身）：取 $M$ 的内射 $R[G]$-模消解 $M \rightarrowtail I^{\bullet}$，取不变量、取同调。最干净，但内射 $R[G]$-模看不见摸不着。
- **标准（bar）消解**（可算）：取 $R$ 的**自由** $R[G]$-模消解 $B_{\bullet} \to R$，再取 $\operatorname{Hom}_{R[G]}(B_{\bullet}, M)$，得到一个**显式**上链复形。这一条给出 $H^{n}$ 的具体公式，见「用标准消解计算群上同调」。

**为什么等于 $\operatorname{Ext}$**：$(-)^{G} = \operatorname{Hom}_{R[G]}(R, -)$，而用 $R$ 的内射消解算 $R^{n}\operatorname{Hom}_{R[G]}(R, -)$ 正是 $\operatorname{Ext}^{n}_{R[G]}(R, -)$。同一个右导出函子，只是换了名字。$H^{n} = 0$（$n < 0$）也正是「右导出函子」的直接后果。

> 续见 notes/def.group-cohomology.2.md
