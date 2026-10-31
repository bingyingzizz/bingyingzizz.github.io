# 长正合列打包成正合偶 $\implies$ 与直接构造同一个谱序列
`imp.filtered-exact-couple` · 推出 · strong 边 · 根 `../`

`def.exact-couple` 正合偶 + `thm.exact-couple-spectral` 正合偶给出谱序列 → `prop.filtered-complex-exact-couple` 过滤复形给出正合偶

**第四步：收敛。** 过滤下有界时每格稳定，由 `thm.exact-couple-spectral` 得 $E_{\infty}^{p,q} = D_{\infty}^{p,q}/D_{\infty}^{p+1,q-1}$；而 $D_{\infty}^{p,q} = \bigcap_{r} \operatorname{im}\bigl(H^{p+q}(F^{p+r}K) \to H^{p+q}(F^{p}K)\bigr) = \operatorname{im}\bigl(H^{p+q}(F^{p}K) \to H^{p+q}(K)\bigr) = F^{p}H^{p+q}(K)$（下有界时这个递降链在每格上稳定到一个偏序集里的极限，而 $\bigcup_{p} F^{p}K = K$ 让它落在那条映射的像上）。于是 $E_{\infty}^{p,q} = F^{p}H^{p+q}/F^{p+1}H^{p+q} = \operatorname{Gr}^{p}H^{p+q}(K)$。∎

> 两条路的差别只在「$Z_{r}/B_{r}$ 的递推怎么打包」：直接构造把递推写在 $E_{r}$ 上，正合偶把递推交给导出机制；两者给出的 $E_{r}$ 与微分逐页相同。
