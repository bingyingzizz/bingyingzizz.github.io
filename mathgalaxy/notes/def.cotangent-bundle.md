# 余切丛　`def.cotangent-bundle`　·　说明
根 `../`

**为什么非要造它**：$k$-形式要在每点吃进 $k$ 个向量、吐一个数、并且对换两个变元要变号 —— 这正是 $\Lambda^{k}T_{p}^{\ast}M$ 里的元素。所以流形上的形式（`def.form-on-manifold`）可以从「余切丛的外积丛的截面」出发，而不是从坐标公式出发；坐标公式只是它在图卡上的样子。

**与切丛的关系**：$T^{\ast}M$ 是切丛 `def.tangent-bundle` 的对偶丛。取对偶不是可有可无的装饰：切丛的截面（向量场）只能正着推、还要求映射是微分同胚；余切丛的截面（1-形式）可以沿**任意**光滑映射拉回。微分形式好用，根源就在这个不对称上。

⚠️ $\mathrm{d}x^{i}$ 在这里是**坐标函数的微分**，不是「留待定义的记号」：$\mathrm{d}x^{i}\big|_{p}(v) = v(x^{i})$。

它和 `def.exterior-derivative` 里那个 $\mathrm{d}$ 是同一个算子作用在 $x^{i}\in C^{\infty}(U)$ 上 —— 所以 $\mathrm{d}x^{i}$ 的「$\mathrm{d}$」也满足 $\mathrm{d}(\mathrm{d}x^{i}) = 0$。

> 续见 notes/def.cotangent-bundle.2.md
