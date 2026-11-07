# 火腿三明治定理　`thm.ham-sandwich`　·　说明
根 `../`

**证明（由 Borsuk–Ulam）**：平面由单位法向 $u \in S^{2}$ 与偏移 $t \in \mathbb{R}$ 决定，记 $P(u, t) := \{\, x : \langle x, u\rangle = t \,\}$。

对固定 $u$，函数 $F_{i}(t) := \operatorname{vol}(A_{i} \cap \{\langle x, u\rangle \le t\})$ 连续、从 $0$ 增到 $\operatorname{vol}(A_{i})$。$A_{i}$ 有**原子**时 $F_{i}$ 会整段跳，可能**跳过** $\operatorname{vol}(A_{i})/2$，所以「存在唯一的平面把 $A_{i}$ 平分」不成立；改用中位数：
$$t_{i}(u) := \inf\left\{t : \operatorname{vol}(A_{i} \cap \{\langle x, u\rangle \le t\}) \ge \tfrac{1}{2}\operatorname{vol}(A_{i})\right\},$$
它由 $F_{i}$ 的连续性存在、作为 $\inf$ 唯一，且 $t_{i}(-u) = -t_{i}(u)$（法向反向，平面不变而「正侧」互换）。

一般可测集用**无原子／光滑**情形逼近：先对 $\partial A_{i}$ 光滑（或半代数）的情形做，再用体积的连续性取极限。

> 续见 notes/thm.ham-sandwich.2.md
