# Jacobi 行列式同号 $\iff$ 处处非零的最高次形式
`imp.mf-volume-form-orientation` · 推出 · strong 边 · 根 `../`

`def.orientable-manifold` 可定向流形 + `def.differential-form` 微分形式 → `prop.volume-form-orientation` 定向与体积形式

故 $\det(\partial y/\partial x) > 0$ —— 这是定向图册。

**「同一个定向」的判据。** 处处非零的 $\omega_{1}, \omega$ 满足 $\omega_{1} = f\omega$，$f$ 处处非零。逐点看体积形式的符号：$f > 0$ 时两者在每张卡上给出同一个正方向，故同一定向；$f$ 在某点 $< 0$ 则两族卡在该点的换序不同，定向相反。连通性只在「$f$ 不能变号」这一步用到（$f$ 连续且无零点）。∎
