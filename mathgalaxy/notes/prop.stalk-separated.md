# 茎与分离预层　`prop.stalk-separated`　·　说明
根 `../`

**证明。**
**1.** 拓扑斯态射 $\hat x = (\hat x^{*}, \hat x_{*})$ 的拉回是「在 $x$ 处的纤维」，而层在一点的纤维就是**茎** $T_{x} = \varinjlim_{x \in U} T(U)$ ✓（余极限沿 $x$ 的邻域取 —— 邻域按包含构成滤过范畴）。
**2.** 验证伴随关系 $\operatorname{Hom}(T, \hat x_{*}E) \cong \operatorname{Hom}(\hat x^{*}T, E)$：左边是一个自然变换，在 $U \ni x$ 处给出 $T(U) \to E$，相容性说明它们「在限制下对应同一个元素」✓；这样的相容族恰好是
$$\varprojlim_{U \ni x} \operatorname{Hom}\bigl(T(U),\ E\bigr) \;=\; \operatorname{Hom}\Bigl(\varinjlim_{U \ni x} T(U),\ E\Bigr) \;=\; \operatorname{Hom}(T_{x}, E) ✓$$
（第一个等号是「反变的 Hom 把余极限送成极限」）。$x \notin U$ 时该层取值 $\emptyset$，覆盖上的相容族只能落在空集里 —— 不存在，故仍是层 ✓。左伴随 $\hat x_{!}$ 同理（把 $E$ 摆在 $x$ 的邻域上，别处放空集）✓。
**3.** $(\Longrightarrow)$ 设 $s, t \in T(U)$ 在每个茎里相等。对每个 $x \in U$：$s$ 与 $t$ 在 $T_{

> 续见 notes/prop.stalk-separated.2.md
