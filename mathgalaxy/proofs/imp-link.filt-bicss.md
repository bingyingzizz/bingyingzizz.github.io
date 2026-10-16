# 下有界过滤复形给出谱序列 $\implies$ 双复形给出谱序列
`imp-link.filt-bicss` · 推出 · strong 边 · 根 `../`

`thm.filtered-complex-spectral` 过滤复形给出谱序列 → `prop.bicomplex-spectral` 双复形给出谱序列

在全复形 $K^{n} = \bigoplus_{p+q=n} K^{p,q}$ 上取**逐列过滤**
$$F^{p}K^{n} \;:=\; \bigoplus_{i+j=n,\ i \ge p} K^{i,j}$$
（$p$ 越大剩下的越少，所以这是**递降**过滤）✓。
**下有界性**：$p \le$ 两个方向的下界时 $F^{p}K^{n} = K^{n}$ ✓，于是这个过滤下有界，可以套「下有界过滤复形给出谱序列」✓。
**识别第 $0$ 页**：$\operatorname{Gr}^{p}K^{p+q} = F^{p}K^{p+q}/F^{p+1}K^{p+q} = K^{p,q}$ ✓，所以 $E^{0}_{p,q} = K^{p,q}$ ✓。
**收敛**：那条定理直接给出 $E^{0}_{p,q} \implies H^{p+q}(K^{\bullet})$ ✓。∎
