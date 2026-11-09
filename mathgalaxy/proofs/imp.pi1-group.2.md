# 道路拼接的四条算律 $\implies$ $\pi_{1}$ 是群
`imp.pi1-group` · 推出 · strong 边 · 根 `../`

`lem.path-product` 道路拼接 + `def.group` 群 → `prop.pi1-group` π₁ 是群

**良定义**：第 (1) 条说 $\alpha \simeq_{p} \alpha^{\prime}$、$\beta \simeq_{p} \beta^{\prime}$ $\implies$ $\alpha \ast \beta \simeq_{p} \alpha^{\prime} \ast \beta^{\prime}$，故 $[\alpha]\cdot[\beta]$ 不依赖代表元；
**结合律**：第 (2) 条 $(\alpha \ast \beta) \ast \gamma \simeq_{p} \alpha \ast (\beta \ast \gamma)$，取类即得；
**单位元**：第 (3) 条 $e_{x_{0}} \ast \alpha \simeq_{p} \alpha \simeq_{p} \alpha \ast e_{x_{0}}$，故 $[e_{x_{0}}]$ 是双边单位；
**逆元**：第 (4) 条 $\alpha \ast \overline{\alpha} \simeq_{p} e_{x_{0}} \simeq_{p} 

> 续见 proofs/imp.pi1-group.3.md
