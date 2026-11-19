# imp.total-variation-basics
`imp.total-variation-basics` · 推出 · strong 边 · 根 `../`

`def.measure` 测度 + `def.signed-measure` 符号测度 + `def.complex-measure` 复测度 + `thm.simple-approximation` 简单函数逼近 → `prop.total-variation-basics` 全变差的基本性质

n>0$，取简单函数 $s=\sum_{k} c_{k}\chi_{F_{k}}$ 使 $|s|\le|f|$ 且 $\|f-s\|_{L^{1}(\mu)}<\varepsilon$（`thm.simple-approximation`）。令 $E_{k}=E\cap F_{k}$（忽略零测的 $\{s=0\}$）。对每个 $k$，$\nu(E_{k})=c_{k}\mu(E_{k})+\int_{E_{k}}(f-s)\,\mathrm{d}\mu$，故 $|\nu(E_{k})|\ge|c_{k}|\mu(E_{k})-\int_{E_{k}}|f-s|\,\mathrm{d}\mu$；求和得 $\sum_{k}|\nu(E_{k})|\ge\int_{E}|s|\,\mathrm{d}\mu-\|f-s\|_{L^{1}}\ge\int_{E}|f|\,\mathrm{d}\mu-2\varepsilon$。对一切划分取上确界并令 $\varepsilon\to0$ 得 $|\nu|(E)\ge\int_{E}|f|\,\mathrm{d}\mu$ ✓；
两边合起来：$|\nu|(E) = \int_{E}|f|\,\

> 续见 proofs/imp.total-variation-basics.3.md
