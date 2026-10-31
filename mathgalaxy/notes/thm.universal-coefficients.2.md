# 万有系数定理　`thm.universal-coefficients`　·　说明
根 `../`

）得正合段
$$\operatorname{Tor}_{1}^{R}\bigl(H_{n}(C), A\bigr) \to B_{n}\otimes A \to Z_{n}\otimes A \to H_{n}(C)\otimes A \to 0 ,$$
于是 $\operatorname{im}\bigl(B_{n}\otimes A \to Z_{n}\otimes A\bigr)$ 是某个映射的像、而 $H_{n}(C)\otimes A$ 是它的**余核**；把同一条正合段在 $n-1$ 处再用一次，$\operatorname{Tor}_{1}^{R}(H_{n-1}(C), A)$ 正是 $B_{n-1}\otimes A \to Z_{n-1}\otimes A$ 的**核** ✓。
**③ 拼起来。** 把 ① 记成 $H_{n}(C\otimes A) = L/K$，其中 $L := \ker(Z_{n}\otimes A \to B_{n-1}\otimes A)$、$K := \operatorname{im}(B_{n}\otimes A \to Z_{n}\otimes A)$ ✓。
下段由 ② 在 $n$ 处，得 $(Z_{n}\otimes A)/K \cong H_{n}(C)\otimes A$ ✓；上段由 ② 在 $n-1$ 处，得 $\operatorname{Tor}_{1}^{R}(H_{n-1}(C), A) = \ker\bigl(B_{n-1}\otimes A \to Z_{n-1}\otimes A\bigr)$ ✓。而第一条张量后正合给出 $Z_{n}\otimes A \twoheadrightarrow B_{n-1}\otimes A$，所以 $L$ 正是这个核沿这条满射的**原像** —— 

> 续见 notes/thm.universal-coefficients.3.md
