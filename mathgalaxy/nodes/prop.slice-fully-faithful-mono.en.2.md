# slice characterisation of monomorphisms　`prop.slice-fully-faithful-mono`
English entry · root `../`
[in graph](../#n=prop.slice-fully-faithful-mono)　·　[Chinese page (authoritative)](./prop.slice-fully-faithful-mono.md)

## Notes · **draft**
**Proof.** On Hom sets the functor is just an inclusion (both sides are subsets of $\operatorname{Hom}(A, B)$), so **faithfulness is automatic** ✓; only fullness needs checking.

**$(\Longrightarrow)$** Given $v : A \to B$ and $b \circ v = f \circ a$: from $f$ monic one gets $b \circ v = a$ ✓, that is, $v$ is a morphism in $/Y$ ✓.

**$(\Longleftarrow)$** If $f g = f h$, take $a = g$, $b = 1_{Y}$: in $/X$ both $h$ and $g$ are morphisms between the same pair of objects, so faithfulness gives $g = h$ ✓. ∎

> continued in nodes/prop.slice-fully-faithful-mono.en.3.md
