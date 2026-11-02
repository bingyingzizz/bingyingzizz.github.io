# 一阶扩展的分类　`thm.ext1-extensions`　·　说明
根 `../`

分裂的选取差一个 $\operatorname{Hom}(P, N)$ 的元素，所以 $\theta$ 的**类**在余核里是良定义的 ✓。
**② 从类到扩张。** 给定 $\theta : K \to N$，作推出（pushout）：$E := (P \oplus N)/\{\, (k, -\theta k) : k \in K \,\}$，得交换图与短正合列 $0 \to N \to E \to M \to 0$ ✓。
**③ 两个方向互逆。** 由构造，①② 逐条对消（拉回后再推出同构于原扩张；反过来 $\theta$ 的类被还原）✓。这一步用的是 ① 里「分裂差一个 $\operatorname{Hom}(P,N)$」。
**④ Baer 和。** 给定两个扩张 $E_{1}, E_{2}$，取 $M$ 上的纤维积 $E_{1}\times_{M}E_{2}$（它在同一个 $M$ 上同时是两者的中间项），再商掉反对角线 $\{\, (n, -n) : n \in N \,\}$ 的像 —— 得到的中间项记 $E_{1} + E_{2}$，即 Baer 和 ✓。

逐条验：结合、交换来自纤维积与商；

零元是 $N\oplus M$（分裂扩张）；

$E$ 的逆元是「把 $E\to M$ 换成 $N\to E$ 的负号」，即把 $E$ 里的 $N$ 反号 ✓。

> 续见 notes/thm.ext1-extensions.3.md
