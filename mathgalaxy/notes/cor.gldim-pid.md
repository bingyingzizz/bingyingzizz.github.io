# 主理想整环的整体维数　`cor.gldim-pid`　·　说明
根 `../`

**证明。**
**① 长度 $2$ 的自由消解。** 取生成元集 $I$ 与满射 $\pi : R^{(I)} \twoheadrightarrow M$（自由模）。它的核 $K$ 是自由模 $R^{(I)}$ 的**子模**，而主理想整环上自由模的子模仍自由 ✓。取满射 $R^{(J)} \twoheadrightarrow K$，拼成
$$0 \to R^{(J)} \to R^{(I)} \to M \to 0 ,$$
正是长度 $1$ 的自由（因而是投射）消解 ✓，故 $\operatorname{pd}_{R} M \le 1$ 对一切 $M$ ✓。
**② $\operatorname{gl.dim} = 0$ 的情形。** 若 $R$ 是域，每个模都是自由模（向量空间取基），故投射，$\operatorname{pd} = 0$，$\operatorname{gl.dim} R = 0$ ✓。
**③ 非域时 $\operatorname{gl.dim} = 1$。** 取非零非单位的 $a \in R$，看 $M := R/(a)$。它投射会有矛盾：若投射，则短正合列 $0 \to (a) \to R \to R/(a) \to 0$ 必分裂（$R/(a)$ 投射），于是 $(a)$ 是 $R$ 的直和项、由某个幂等元切出；而整环里幂等元只有 $0, 1$，$(a) \ne 0$ 且 $(a) \ne R$，矛盾 ✓。故 $\operatorname{pd}_{R} M = 1$（上界由 ① 给出），于是 $\operatorname{gl.dim} R 

> 续见 notes/cor.gldim-pid.2.md
