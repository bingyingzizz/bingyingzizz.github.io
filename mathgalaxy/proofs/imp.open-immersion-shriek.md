# 固态模里 $\prod$ 与局部化交换 $\implies$ $j_!$ 存在
`imp.open-immersion-shriek` · 推出 · strong 边 · 根 `../`

`def.f-shriek` 紧支撑推前 f_! + `thm.za-analytic` 有限生成代数的解析环 → `prop.open-immersion-shriek` 开浸入的 j_!

$j_!$ 存在 $\iff$ $j^*$ 保极限。$j$ 是开浸入，$j^*$ 就是「把 $A$-模换成 $A[1/f]$-模」；要它保积就等价于

$$\prod_I A \otimes_{A_\blacksquare} A[1/f]_\blacksquare \;\cong\; \prod_I A[1/f].$$

在抽象 $A$-模里，左边是 $\prod_I A[1/f]$ 的**子集**（$\prod$ 与局部化不交换），一般不相等；在固态 $A$-模里，$\prod_I A$ 是紧投射对象（`cor.solid-compact-generators`），$\otimes_{A_\blacksquare}$ 保它，且 $A[1/f]_\blacksquare$ 与 $\prod$ 相容。

仿射、有限型情形由 `thm.za-analytic` 的 $j_!$ 给出；一般情形取仿射开覆盖逐步粘合。$\blacksquare$
