# imp.sheaf-mono-epi-iso
`imp.sheaf-mono-epi-iso` · 推出 · strong 边 · 根 `../`

`prop.sheaf-epi-criterion` 满态射的局部判据 + `def.equalizer` 等化子 / 余等化子 + `def.sheaf` 层 + `def.topos` 拓扑斯 + `def.image` 像 / 余像 → `prop.sheaf-mono-epi-iso` 层中单满即同构

由 $m e = m' e'$ 与 (满, 单) 分解的泛性，$e'$ 通过 $e$ 分解：$e$ 是满态射（epi，右消去），$m'$ 单，故存在唯一 $t:I\to I'$ 使 $t e=e'$，于是 $m' t e=m' e'=m e$，由 $e$ 满（右消去）得 $m' t=m$；对称地得 $s:I'\to I$ 使 $s e'=e$、$m s=m'$。两式复合：$t s e'=e'$，由 $e'$ 满得 $t s=\operatorname{id}_{I'}$；对称地 $s t=\operatorname{id}_{I}$，故 $I\cong I'$ ✓（拓扑斯中 (满, 单) 分解的存在性与唯一性即像分解，是标准事实）。

∎

> 本边使用 `prop.sheaf-epi-criterion`(L18)、`def.topos`(L19) 等，目标层已升到 L20；无 layer:false。
