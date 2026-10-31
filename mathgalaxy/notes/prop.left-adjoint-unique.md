# 左伴随唯一　`prop.left-adjoint-unique`　·　说明
根 `../`

**证明。** 设 $F_{1}\dashv G$、$F_{2}\dashv G$，伴随同构记为 $\varphi_{1}, \varphi_{2}$。
- 对任意 $X \in \mathcal{C}$ 与 $Y \in \mathcal{D}$，
$$\operatorname{Hom}_{\mathcal{D}}\bigl(F_{1}X, Y\bigr) \xrightarrow{\;\varphi_{1}\;} \operatorname{Hom}_{\mathcal{C}}\bigl(X, GY\bigr) \xrightarrow{\;\varphi_{2}^{-1}\;} \operatorname{Hom}_{\mathcal{D}}\bigl(F_{2}X, Y\bigr)$$
是一个与 $Y$ 自然同构 ✓。
- 由 **Yoneda 引理**，自然同构 $\operatorname{Hom}(F_{1}X, -) \cong \operatorname{Hom}(F_{2}X, -)$ 唯一地来自一个同构 $\theta_{X} : F_{1}X \to F_{2}X$ ✓。
- $\theta$ 对 $X$ 自然：$\theta$ 是「用同两个伴随同构拼出来的」，而伴随同构对两个变量都自然，故 $\theta : F_{1} \to F_{2}$ 是自然同构 ✓。
- 同一条论证交换 $\mathcal{C}$ 与 $\mathcal{D}^{\mathrm{op}}$ 就得到右伴随的唯一性 ✓。∎
