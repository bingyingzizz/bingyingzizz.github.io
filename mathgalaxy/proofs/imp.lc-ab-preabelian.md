# imp.lc-ab-preabelian
`imp.lc-ab-preabelian` · 推出 · strong 边 · 根 `../`

`def.locally-compact-space` 局部紧空间 + `def.abelian-category` 阿贝尔范畴 + `def.fibered-product` 纤维积 / 纤维余积 + `def.equalizer` 等化子 / 余等化子 → `prop.lc-ab-preabelian` 局部紧阿贝尔群不是阿贝尔范畴

**证明。**
- **预阿贝尔**：有有限积与有限余积（积 = 积群配积拓扑；余积 = 直和配「余积拓扑」）、核与余核都存在 —— 核是通常的核配**子空间拓扑**；余核是 $N/\overline{f(M)}$ 配**商拓扑**（$f(M)$ 未必闭，必须商掉**闭包**：对闭子群商群配商拓扑才是局部紧 Hausdorff）✓。
- **不是阿贝尔**：取 $\mathrm{id} : \mathbb{R}^{\mathrm{disc}} \to \mathbb{R}$。

它连续（离散拓扑比欧氏拓扑细）且是单射，故是单态射；

它的**余核** $\mathbb{R}/\mathbb{R} = 0$。

> 续见 proofs/imp.lc-ab-preabelian.2.md
