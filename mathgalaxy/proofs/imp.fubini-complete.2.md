# 乘积测度通常不完备 $\implies$ 必须补一条完备情形的 F–T
`imp.fubini-complete` · 推出 · strong 边 · 根 `../`

`thm.fubini-tonelli` Fubini–Tonelli + `thm.completion` 完备化定理 + `prop.product-incomplete` 乘积测度通常不完备 → `thm.fubini-complete` 完备情形的 F–T

$$\int \chi_G d\lambda = 0 = \int ( \int \chi_G d\nu ) d\mu$$

两边都是 0。（对 a.e. 的 $x$，$G_x$ 是 $\nu$零集。）

**④ 由线性推广到非负简单函数，再用 MCT 推广到一切 $f \ge 0$。** 关键点：完备化只多出「含在零集里的部分」，而这部分对积分的贡献恒为 0，所以整段论证不会被破坏。

**⑤ 一般情形**：把 $f$ 拆成 $\operatorname{Re} f^\pm , \operatorname{Im} f^\pm $ 四个非负部分，逐块用 ④ —— 但此时所有断言都退化成「对 a.e. 的 x / y」，因为零集上的截口行为不再逐一可控。∎

$>$ 要点：**核心就是把 $E$ 拆成 $F \sqcup G$** —— $F$ 归老定理、$G$ 归「截口都是零集」。
