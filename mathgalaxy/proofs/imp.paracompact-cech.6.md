# 足够多内射 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`thm.pushforward-enough-injectives` 足够多内射层 + `prop.skyscraper-injective` 天际线层是内射层 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第四步：无环消解算导出函子。** 由第一到第三步，$\check{\mathcal{C}}^{\bullet}(\mathfrak{U}, \mathcal{M})$ 是一个由 $\Gamma$-无环层组成的消解。由 Leray 零调性（对右导出函子，用 $F$-零调对象组成的消解算出的同调与用内射消解算出的相同 —— 这一步的合法性由「足够多内射」保证，见 `thm.pushforward-enough-injectives`），

$$H^{n}(X, \mathcal{M}) = H^{n}\bigl(\Gamma(X, \check{\mathcal{C}}^{\bullet})\bigr) = \check{H}^{n}(\mathfrak{U}, \mathcal{M}) .$$

> 续见 proofs/imp.paracompact-cech.7.md
