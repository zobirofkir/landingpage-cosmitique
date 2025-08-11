<div class="space-y-4">
    @if($historique && count($historique) > 0)
        @foreach($historique as $entry)
            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-semibold text-gray-900">{{ $entry['action'] }}</h4>
                        @if($entry['details'])
                            <p class="text-sm text-gray-600 mt-1">{{ $entry['details'] }}</p>
                        @endif
                    </div>
                    <div class="text-right text-sm text-gray-500">
                        <div>{{ $entry['timestamp'] }}</div>
                        <div>par {{ $entry['user'] }}</div>
                    </div>
                </div>
            </div>
        @endforeach
    @else
        <div class="text-center py-8 text-gray-500">
            <p>Aucun historique disponible</p>
        </div>
    @endif
</div>